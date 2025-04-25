Feature: Place Order: Register while Checkout

  Scenario: Register while Checkout <width> <height>
    Given Launch browser <width> <height>
    When Navigate to url
    Then Verify that home page is visible successfully
    When Add products to cart
    When Click Cart button
    Then Verify that cart page is displayed
    When Click Proceed To Checkout button
    When Click Register Login button
    When Fill all details in Signup and create account
    Then Verify Account Created! 'Account Created!' and click Continue button
    Then Verify Logged in as username at top
    When Click Cart button
    When Click Proceed To Checkout button
    When Verify Address Details and Review Your Order
    When Enter description in comment text area and click Place Order
    When Enter payment details: Name on Card, Card Number, CVC, Expiration date
    When Click Pay and Confirm Order button
    Then Verify success message 'Congratulations! Your order has been confirmed!'
    When Click Delete Account button
    Then Verify Account Delete! 'Account Deleted!' and click Continue button

    Examples:
      | width | height |
      |   390 |    844 |
      |  1024 |    768 |
