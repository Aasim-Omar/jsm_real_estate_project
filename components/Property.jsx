import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react"
import { FaBed, FaBath } from "react-icons/fa"
import { BsGridFill } from "react-icons/bs"
import { GoVerified } from "react-icons/go"
import millify from "millify";
import defaultImage from "../assets/house.webp"

export default function Property({ property: { coverPhoto, price, rentFrequency, rooms, title_l1, baths, area, agency, isVerified, externalID } }) {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer" >
        <Box>
          <Image src={coverPhoto ? coverPhoto.url : defaultImage} width={400} height={260} alt="Product" />
        </Box>
        <Box w="full">
          <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
              {isVerified && <Box paddingRight='3' color='green.400'><GoVerified /></Box>}
              <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
            </Flex>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize='lg'>
            {title_l1}
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}