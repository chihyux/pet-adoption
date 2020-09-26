import { useEffect } from 'react'
import { fetchData } from '../store/reducer'
import { useSelector, useDispatch } from 'react-redux'

export const useFetch = ({ route, params, top, skip }) => {
  const dispatch = useDispatch()
  const { searchData, isFetching, isFetchingError } = useSelector((state) => ({
    searchData: state.dataStatus.searchData,
    isFetching: state.dataStatus.isFetching,
    isFetchingError: state.dataStatus.isFetchingError,
  }))

  useEffect(() => {
    const fetching = async () => {
      dispatch(fetchData(route, params, top, skip))
    }
    fetching()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params, route])

  return { searchData, isFetching, isFetchingError }
}
