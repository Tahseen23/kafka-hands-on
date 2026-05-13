import { kafka } from './client.js'

const producer = kafka.producer()
await producer.connect()
await producer.send({
  topic:'test-topic',
  messages:[
    {value:'Hello KafkaJs user!'},
  ]
})

await producer.disconnect()
