import { ModelToggle } from '~/components/custom/mode-toggle'

function App() {
  return (
    <div className="w-screen h-screen p-24 space-y-2">
      <div className="text-3xl font-bold tracking-tight">Vite</div>
      <div className="text-base text-muted-foreground">Install and configure Vite.</div>
      <ModelToggle />
    </div>
  )
}

export default App
