// Template expression
// rafc

const TemplateExpression = () => {
    const name = "Cesar"

    const data = {
        age: 34,
        job: "Analista de Dados"
    }

    return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>A sua idade é {data.age} e sua profissão é: {data.job}</p>
    </div>
  )
}

export default TemplateExpression