/**
 * In NATS a subject can be called a channel as well.
 * We define this to ensure consistency between listeners and publishers regarding the event channels.
 *  
*/
enum Subjects{
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',

  OrderCreated = 'order:created',
  OrderCancelled = 'order:cancelled',

  ExpirationComplete = 'expiration:complete',

  PaymentCreated = 'payment:created',
};

export { Subjects };