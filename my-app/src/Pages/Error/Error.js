import Alert from 'react-bootstrap/Alert';

function Error() {
  return (
    <>
      {[ 
        'info',
  
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Hubo un error, por favor escriba bien la direccion url!
        </Alert>
      ))}
    </>
  );
}

export default Error;