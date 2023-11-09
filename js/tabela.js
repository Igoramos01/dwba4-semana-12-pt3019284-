class TabelaDinamica extends React.Component {
  render() {
    const { dados } = this.props;
    const colunas = Object.keys(dados[0]);

    return (
      <table border="1">
        <thead>
          <tr>
            {colunas.map((coluna) => (
              <th key={coluna}>{coluna}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((linha) => (
            <tr key={linha.id}>
              {colunas.map((coluna) => (
                <td key={coluna}>{linha[coluna]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

// Renderize o componente TabelaDinamica no elemento com id "tabela-root"
ReactDOM.render(
  <TabelaDinamica
    dados={[
      {DISCIPLINA: 'Sistemas Operacionais', CARGA: 66.7, PERIODO: 'Noturno' },
      {DISCIPLINA: 'Inglês', CARGA: 33.3, PERIODO: 'Noturno' },
      {DISCIPLINA: 'Laboratório de Estruturas de Dados e Programação', CARGA: 33.3, PERIODO: 'Noturno' },
      {DISCIPLINA: 'Introdução a Banco de Dados', CARGA: 66.7, PERIODO: 'Noturno' },
    ]}
  />
  ,
  document.getElementById('tabela-root')
);
