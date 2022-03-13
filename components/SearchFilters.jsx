import { useEffect, useState } from "react"
import { Flex, Input, Text, Spinner, Box, Select, Icon, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { MdCancel } from "react-icons/md"
import Image from "next/image"
import { filterData, getFilterValues } from "../utils/filterData"

const SearchFilters = () => {
  let [filters, setFilters] = useState(filterData);
  const router = useRouter();
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues)
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })
    router.push({ pathname: path, query: query });
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" bg="gray.100">
      {filters.map((filter) => (
        <Box key={filter.queryName} w="fit-content" mx="5" my="2" >
          <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder}>
            {filter.items.map((item => (
              <option value={item.value} key={item.value}>{item.name}</option>
            )))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters