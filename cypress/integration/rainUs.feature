
Feature: rain.us validation

    Scenario: Access rain.us home page
        Given I navigate to the main page of rain.us
        Then I should see the main page with details about the rain.us

    Scenario Outline: Validate navbar
        Given I navigate to the main page of rain.us
        When I click '<button>'
        Then I should see be redirect to the '<navbar>' page
        Examples:
            | button                | navbar      |
            | About us              | #about      |
            | Benefit for employers | #benefits   |
            | How it works          | #howItWorks |
            | Blog                  | blog        |
            | Contact               | contact     |

    Scenario Outline: See with carousel its working
        Given I navigate to the main page of rain.us
        And go to How it works
        When I click '<button>' carousel
        Then I should see the '<text>'
        Examples:
            | button               | text                 |
            | RAIN MOBILE APP      | Rain mobile app      |
            | HOW WE PAY OUR BILLS | How we pay our bills |
            | EASY INTEGRATIONS    | Easy integrations    |

    Scenario Outline: Validate footer
        Given I navigate to the main page of rain.us
        And I am at the bottom of the page
        When I click '<button>'
        Then I should see be redirect to the '<footer>' page
        Examples:
            | button       | footer         |
            | Contact      | contact        |
            | Privacy      | privacyPolicy  |
            | Terms of Use | terms          |
