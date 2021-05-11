import axios from 'axios'
import { useAppDispatch, useAppSelector } from 'hook'
import useAsyncEffect from 'use-async-effect'

export default function updateBookmark(): void {
  const authenticated = useAppSelector((state) => state.authenticated)
  const dispatch = useAppDispatch()

  useAsyncEffect(async () => {
    try {
      let bookmark = await (await axios(process.env.REACT_APP_API_URL + 'bookmark')).data

      bookmark = await bookmark.map((e: any) => {
        return e.itemId
      })

      return dispatch({
        type: 'CHANGE_BOOKMARK',
        payload: bookmark,
      })
    } catch {
      return dispatch({
        type: 'CHANGE_BOOKMARK',
        payload: [],
      })
    }
  }, [authenticated])
}
