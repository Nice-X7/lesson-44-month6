import { Tittle } from './Tittle'
import { Flex } from './Flex'
import { Console } from './Console'
import { Button } from './Button'


export const App = () => {
  return (
    <>
      {/* ------Tittle------ */}
      <Flex justify="center">
          <Tittle color="green">
            Console
          </Tittle>
        </Flex>

        <Flex direction="column" margin="40px 0 0 0">
          <Console />
          <Button aling="flex-end" color="green" outline>
            Отправить
          </Button>
        </Flex>
    </>
  );
}
