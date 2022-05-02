import { connect } from 'react-redux'
import { List, Spinner, Center } from '@chakra-ui/react'
import BlogItem from './BlogItem'
import { fetchBlogList } from '../../actions/blog'
import { useEffect } from 'react'

const BlogList = props => {

  const { data, isLoading, fetchBlogList } = props

  useEffect(() => {
    fetchBlogList()
  }, [fetchBlogList])

  return isLoading ? (
    <Center h="100vh">
      <Spinner thickness="4px" speed="0.7s" size="xl" />
    </Center>
  ) : (
    <List>
      {data.map(blog => {
        return <BlogItem key={blog.id} {...blog} />
      })}
    </List>
  )
}

const mapState = state => ({
  data: state.blog.data,
  isLoading: state.blog.isLoading,
  errorMessage: state.blog.errorMessage
})

export default connect(mapState, { fetchBlogList })(BlogList)
