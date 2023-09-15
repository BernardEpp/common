enum OrderStatus {
  /**
   * When the order has been created but not yet reserved
   */
  Created = 'created',
  /**
   * A order has the status of cancelled when the order tries to reserve a ticket that has benn already reserved
   * Or, the order expires before the payment happens.
   */
  Cancelled = 'cancelled',

  /**
   * The order sucessfully reserved the ticket
   */
  AwaitingPayment = 'awaiting:payment',
  /**
   * A reserved order that has been payed is complete.
   */
  Complete = 'complete'
}

export { OrderStatus };