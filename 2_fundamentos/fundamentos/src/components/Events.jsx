
const Events = () => {
    const handleClick = () => {
        console.log("Executou")
    }

const renderSomething = (x) => {
    if(x) {
        return <h1>Rederizado</h1>
    } else {
        return <h1>Renderizando outra coisa</h1>
    }
}

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        </div>
        <br />
        <div>
            <button onClick={handleClick}>Click com função</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events