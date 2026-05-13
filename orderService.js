import { kafka , TOPIC_NEW_ORDER , TOPIC_NEW_LOGGING_ACTION } from './client.js'

const producer = kafka.producer()

const createNewOrder = async (input) => {
  try {
    await producer.connect()

    await producer.send({
      topic:TOPIC_NEW_ORDER,
      messages:[{ value: JSON.stringify(input)}]
    })

    await producer.send({
      topic:TOPIC_NEW_LOGGING_ACTION,
      messages:[{
        value:JSON.stringify({
          serviceName:'order-service',
          action:'new-order'
        })
      }]
    })
  } catch(err){
    console.log(err)
  }finally{
    await producer.disconnect()
  }
}

export default createNewOrder;

