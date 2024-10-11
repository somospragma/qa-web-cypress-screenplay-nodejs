Feature: Pagina de prueba: ToolsQA

Scenario: Welcome, Login in Book Store
    Given Ingresar al portal web demoqa
    When Da click en la seccion de Book Store Application
    Then Verificar que se muestre la pagina de Login
    When Digita el userName 'prueba'
    When Digita la contraseña 'Aa123456*'
    When Da click en el boton de Login
    Then Verificar que se muestre la pagina de mi cuenta