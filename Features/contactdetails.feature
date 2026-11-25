Feature:Contact Details
 
Background:
 Given Login to orangeHRM Site and enter username as "Admin" and Password as "admin123"
 
 Scenario Outline: Update contact details
    When I open the contact details tab
    And I fill the contact form using excel <row>
    And I Save the contact details
    Then I logout from the application
 
Examples:
|row|
|1|