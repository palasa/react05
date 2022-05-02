import React from 'react'
import { ListItem, Icon, Heading, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function BlogItem(props) {
  const { useId, id, title, body } = props
  return (
    <ListItem padding={5}>
      <Heading as="h3" fontSize={18}>
        <Icon mr={2} as={HamburgerIcon} />
        {title}
      </Heading>
      <Text>{body}</Text>
    </ListItem>
  )
}
