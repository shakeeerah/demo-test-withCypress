let selector;

describe('Test The Playground', () => {
  before(()=>{
    cy.fixture('element').then((attri) =>{
      selector = attri.userElement

    })
  })
  

  it('Starts the action and then waits for the progress bar to reach 75%', () => {
    cy.progressBar()


  })
})