
interface Window {
  Socket: {
    listen?: (callback: (event: unknown) => void) => void
  }
}
