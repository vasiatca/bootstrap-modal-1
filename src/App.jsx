import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Modal from './components/Modal'
import Form from './components/Form'

export function App() {
  return (
    <Container>
      <Header />
      <Button data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</Button>
      <Modal id="exampleModal">
        <Form />
      </Modal>
      <Footer />
    </Container>
  )
}