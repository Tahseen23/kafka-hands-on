import { Kafka } from 'kafkajs'

export const TOPIC_NEW_ORDER = "new-order-topic";
export const TOPIC_INVENTORY_EMPTY = "inventory-empty-topic";
export const TOPIC_NEW_LOGGING_ACTION = "new-logging-action-topic";

export const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})