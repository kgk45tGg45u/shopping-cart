import { useEffect } from "react"

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Bijan's Shop` },
    [title])

  return (
    null
  )
}
