
import { 
  navigate, addTodo,validateNumberOfTodosShown,
  validateTodoCompletedState,validateTodoTxt, 
  validateToggleState, clearCompleted,toggleTodo
} from "../../pageObjects/todo-pages.cy"


describe('todo cations',()=>{
  beforeEach(()=>{
    navigate()

    addTodo('Clean room')
  })

  it('should add a new todo to the list',()=>{
    validateTodoTxt(0, 'Clean room')

    validateToggleState(0, false)
  })


describe('toggling todos',()=> {
  it('should toggle test correctly',()=> {
    toggleTodo(0)

    validateTodoCompletedState(0, true)
  })


  it('should mark a todo as completed',()=>{
    cy.get('.toggle').click()
    cy.get('label').should('have.css','text-decoration-line', 'line-through')

  })

  it('should clear completed todos',()=>{
    toggleTodo(0)

    clearCompleted()

    validateNumberOfTodosShown(0)})
  })

})