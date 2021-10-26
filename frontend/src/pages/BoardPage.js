import Board from '../components/Board'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

BoardPage.propTypes = {
  todos: PropTypes.array.isRequired,
  onAdvance: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default function BoardPage({ todos, onAdvance, onDelete }) {
  const { statusSlug } = useParams()

  const slugToStatus = {
    open: 'OPEN',
    'in-progress': 'IN_PROGRESS',
    done: 'DONE',
  }

  const filteredTodos = todos.filter(
    todo => todo.status === slugToStatus[statusSlug]
  )

  const statusToTitle = {
    open: 'Open',
    'in-progress': 'In Progress',
    done: 'Done',
  }

  const title = statusToTitle[statusSlug]

  return (
    <Wrapper>
      <Board
        todos={filteredTodos}
        onAdvance={onAdvance}
        onDelete={onDelete}
        title={title}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
`
