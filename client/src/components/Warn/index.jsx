import React from 'react'
import {
  Card,
  CardBody,
  Button,
  Typography,
} from "@material-tailwind/react";
const Warn = () => {
  return (
    <section className='text-center items-center justify-center'>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="red" className="mb-2">
            Please Note!
          </Typography>
          <Typography>
            There may be some inconsistency in the data format since its a nosql DB being viwed as RDMS only on the basis of schema. That too without strict mapping.
          </Typography>
          <Button>ok</Button>
        </CardBody>
      </Card>
    </section>
  )
}

export default Warn