$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testcafe.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Example Page Functionalities",
  "description": "",
  "id": "verify-example-page-functionalities",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify form submission by selecting tried testcafe ,feature,os,interface.",
  "description": "",
  "id": "verify-example-page-functionalities;verify-form-submission-by-selecting-tried-testcafe-,feature,os,interface.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page  is displayed as Example",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User enters the name as \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "selects inputs as \"\u003cfeature\u003e\",\"\u003cos\u003e\",\"\u003cinterface\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "selects tried Testcafe,\"\u003crating\u003e\" ,enter comments as \"\u003ccomment\u003e\"and submit",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Thankyou page is  displayed with text  \"Thank you, \u003cname\u003e!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-example-page-functionalities;verify-form-submission-by-selecting-tried-testcafe-,feature,os,interface.;",
  "rows": [
    {
      "cells": [
        "name",
        "feature",
        "os",
        "interface",
        "rating",
        "comment"
      ],
      "line": 12,
      "id": "verify-example-page-functionalities;verify-form-submission-by-selecting-tried-testcafe-,feature,os,interface.;;1"
    },
    {
      "cells": [
        "Sri",
        "remote",
        "windows",
        "Command Line",
        "5",
        "Used windows with cmd line"
      ],
      "line": 13,
      "id": "verify-example-page-functionalities;verify-form-submission-by-selecting-tried-testcafe-,feature,os,interface.;;2"
    },
    {
      "cells": [
        "lakshmi",
        "re-using",
        "macos",
        "JavaScript API",
        "6",
        "Used mac with api"
      ],
      "line": 14,
      "id": "verify-example-page-functionalities;verify-form-submission-by-selecting-tried-testcafe-,feature,os,interface.;;3"
    },
    {
      "cells": [
        "koppolu",
        "background",
        "linux",
        "Both",
        "8",
        "Used linux"
      ],
      "line": 15,
      "id": "verify-example-page-functionalities;verify-form-submission-by-selecting-tried-testcafe-,feature,os,interface.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify form submission by selecting tried testcafe ,feature,os,interface.",
  "description": "",
  "id": "verify-example-page-functionalities;verify-form-submission-by-selecting-tried-testcafe-,feature,os,interface.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page  is displayed as Example",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User enters the name as \"Sri\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "selects inputs as \"remote\",\"windows\",\"Command Line\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "selects tried Testcafe,\"5\" ,enter comments as \"Used windows with cmd line\"and submit",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Thankyou page is  displayed with text  \"Thank you, Sri!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExampleSteps.launch_the_Application()"
});
formatter.result({
  "duration": 9365736400,
  "status": "passed"
});
formatter.match({
  "location": "ExampleSteps.title_of_the_page_is_displayed_as_Example()"
});
formatter.result({
  "duration": 181612000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sri",
      "offset": 25
    }
  ],
  "location": "ExampleSteps.user_enters_the_name_as(String)"
});
formatter.result({
  "duration": 144974300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "remote",
      "offset": 19
    },
    {
      "val": "windows",
      "offset": 28
    },
    {
      "val": "Command Line",
      "offset": 38
    }
  ],
  "location": "ExampleSteps.selects_inputs_as(String,String,String)"
});
formatter.result({
  "duration": 2465201000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    },
    {
      "val": "Used windows with cmd line",
      "offset": 47
    }
  ],
  "location": "ExampleSteps.selects_tried_Testcafe_and_submit(String,String)"
});
formatter.result({
  "duration": 3189038600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you, Sri!",
      "offset": 40
    }
  ],
  "location": "ExampleSteps.thankyou_page_is_displayed_with_text(String)"
});
formatter.result({
  "duration": 81775100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify form submission by selecting tried testcafe ,feature,os,interface.",
  "description": "",
  "id": "verify-example-page-functionalities;verify-form-submission-by-selecting-tried-testcafe-,feature,os,interface.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page  is displayed as Example",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User enters the name as \"lakshmi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "selects inputs as \"re-using\",\"macos\",\"JavaScript API\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "selects tried Testcafe,\"6\" ,enter comments as \"Used mac with api\"and submit",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Thankyou page is  displayed with text  \"Thank you, lakshmi!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExampleSteps.launch_the_Application()"
});
formatter.result({
  "duration": 123258100,
  "status": "passed"
});
formatter.match({
  "location": "ExampleSteps.title_of_the_page_is_displayed_as_Example()"
});
formatter.result({
  "duration": 46440500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lakshmi",
      "offset": 25
    }
  ],
  "location": "ExampleSteps.user_enters_the_name_as(String)"
});
formatter.result({
  "duration": 82883400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "re-using",
      "offset": 19
    },
    {
      "val": "macos",
      "offset": 30
    },
    {
      "val": "JavaScript API",
      "offset": 38
    }
  ],
  "location": "ExampleSteps.selects_inputs_as(String,String,String)"
});
formatter.result({
  "duration": 2304397300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    },
    {
      "val": "Used mac with api",
      "offset": 47
    }
  ],
  "location": "ExampleSteps.selects_tried_Testcafe_and_submit(String,String)"
});
formatter.result({
  "duration": 1705030400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you, lakshmi!",
      "offset": 40
    }
  ],
  "location": "ExampleSteps.thankyou_page_is_displayed_with_text(String)"
});
formatter.result({
  "duration": 61445400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify form submission by selecting tried testcafe ,feature,os,interface.",
  "description": "",
  "id": "verify-example-page-functionalities;verify-form-submission-by-selecting-tried-testcafe-,feature,os,interface.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page  is displayed as Example",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User enters the name as \"koppolu\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "selects inputs as \"background\",\"linux\",\"Both\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "selects tried Testcafe,\"8\" ,enter comments as \"Used linux\"and submit",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Thankyou page is  displayed with text  \"Thank you, koppolu!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExampleSteps.launch_the_Application()"
});
formatter.result({
  "duration": 141509500,
  "status": "passed"
});
formatter.match({
  "location": "ExampleSteps.title_of_the_page_is_displayed_as_Example()"
});
formatter.result({
  "duration": 87735500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "koppolu",
      "offset": 25
    }
  ],
  "location": "ExampleSteps.user_enters_the_name_as(String)"
});
formatter.result({
  "duration": 139113800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "background",
      "offset": 19
    },
    {
      "val": "linux",
      "offset": 32
    },
    {
      "val": "Both",
      "offset": 40
    }
  ],
  "location": "ExampleSteps.selects_inputs_as(String,String,String)"
});
formatter.result({
  "duration": 2479957200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 24
    },
    {
      "val": "Used linux",
      "offset": 47
    }
  ],
  "location": "ExampleSteps.selects_tried_Testcafe_and_submit(String,String)"
});
formatter.result({
  "duration": 1693788200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you, koppolu!",
      "offset": 40
    }
  ],
  "location": "ExampleSteps.thankyou_page_is_displayed_with_text(String)"
});
formatter.result({
  "duration": 63045500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify form submission without selecting tried testcafe",
  "description": "",
  "id": "verify-example-page-functionalities;verify-form-submission-without-selecting-tried-testcafe",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enters the name as \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "selects inputs as \"\u003cfeature\u003e\",\"\u003cos\u003e\",\"\u003cinterface\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Don\u0027t select tried Testcafe and submit",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Thankyou page is  displayed with text  \"Thank you, \u003cname\u003e!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "verify-example-page-functionalities;verify-form-submission-without-selecting-tried-testcafe;",
  "rows": [
    {
      "cells": [
        "name",
        "feature",
        "os",
        "interface"
      ],
      "line": 25,
      "id": "verify-example-page-functionalities;verify-form-submission-without-selecting-tried-testcafe;;1"
    },
    {
      "cells": [
        "Sri",
        "remote",
        "windows",
        "Command Line"
      ],
      "line": 26,
      "id": "verify-example-page-functionalities;verify-form-submission-without-selecting-tried-testcafe;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Verify form submission without selecting tried testcafe",
  "description": "",
  "id": "verify-example-page-functionalities;verify-form-submission-without-selecting-tried-testcafe;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enters the name as \"Sri\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "selects inputs as \"remote\",\"windows\",\"Command Line\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Don\u0027t select tried Testcafe and submit",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Thankyou page is  displayed with text  \"Thank you, Sri!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExampleSteps.launch_the_Application()"
});
formatter.result({
  "duration": 129338900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sri",
      "offset": 25
    }
  ],
  "location": "ExampleSteps.user_enters_the_name_as(String)"
});
formatter.result({
  "duration": 142562200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "remote",
      "offset": 19
    },
    {
      "val": "windows",
      "offset": 28
    },
    {
      "val": "Command Line",
      "offset": 38
    }
  ],
  "location": "ExampleSteps.selects_inputs_as(String,String,String)"
});
formatter.result({
  "duration": 2396451500,
  "status": "passed"
});
formatter.match({
  "location": "ExampleSteps.dont_select_tried_Testcafe_and_submit()"
});
formatter.result({
  "duration": 132241600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you, Sri!",
      "offset": 40
    }
  ],
  "location": "ExampleSteps.thankyou_page_is_displayed_with_text(String)"
});
formatter.result({
  "duration": 54456400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Verify rating and comments are not enabled without selecting tried testcafe",
  "description": "",
  "id": "verify-example-page-functionalities;verify-rating-and-comments-are-not-enabled-without-selecting-tried-testcafe",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User enters the name as \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "selects inputs as \"\u003cfeature\u003e\",\"\u003cos\u003e\",\"\u003cinterface\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "tried Testcafe checkbox is not selected",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Ratingslider and Comments are not enabled",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "verify-example-page-functionalities;verify-rating-and-comments-are-not-enabled-without-selecting-tried-testcafe;",
  "rows": [
    {
      "cells": [
        "name",
        "feature",
        "os",
        "interface"
      ],
      "line": 36,
      "id": "verify-example-page-functionalities;verify-rating-and-comments-are-not-enabled-without-selecting-tried-testcafe;;1"
    },
    {
      "cells": [
        "Sri",
        "remote",
        "windows",
        "Command Line"
      ],
      "line": 37,
      "id": "verify-example-page-functionalities;verify-rating-and-comments-are-not-enabled-without-selecting-tried-testcafe;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Verify rating and comments are not enabled without selecting tried testcafe",
  "description": "",
  "id": "verify-example-page-functionalities;verify-rating-and-comments-are-not-enabled-without-selecting-tried-testcafe;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User enters the name as \"Sri\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "selects inputs as \"remote\",\"windows\",\"Command Line\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "tried Testcafe checkbox is not selected",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Ratingslider and Comments are not enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "ExampleSteps.launch_the_Application()"
});
formatter.result({
  "duration": 109451400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sri",
      "offset": 25
    }
  ],
  "location": "ExampleSteps.user_enters_the_name_as(String)"
});
formatter.result({
  "duration": 136075200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "remote",
      "offset": 19
    },
    {
      "val": "windows",
      "offset": 28
    },
    {
      "val": "Command Line",
      "offset": 38
    }
  ],
  "location": "ExampleSteps.selects_inputs_as(String,String,String)"
});
formatter.result({
  "duration": 2443387600,
  "status": "passed"
});
formatter.match({
  "location": "ExampleSteps.tried_Testcafe_checkbox_is_not_selected()"
});
formatter.result({
  "duration": 1265100,
  "status": "passed"
});
formatter.match({
  "location": "ExampleSteps.ratingslider_and_Comments_are_not_enabled()"
});
formatter.result({
  "duration": 109425500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Verify populate button functionality",
  "description": "",
  "id": "verify-example-page-functionalities;verify-populate-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User enters the name as \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "click on populate",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Reset Information Popup is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "verify-example-page-functionalities;verify-populate-button-functionality;",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 46,
      "id": "verify-example-page-functionalities;verify-populate-button-functionality;;1"
    },
    {
      "cells": [
        "Sri"
      ],
      "line": 47,
      "id": "verify-example-page-functionalities;verify-populate-button-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Verify populate button functionality",
  "description": "",
  "id": "verify-example-page-functionalities;verify-populate-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User enters the name as \"Sri\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "click on populate",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Reset Information Popup is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ExampleSteps.launch_the_Application()"
});
formatter.result({
  "duration": 176492800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sri",
      "offset": 25
    }
  ],
  "location": "ExampleSteps.user_enters_the_name_as(String)"
});
formatter.result({
  "duration": 118384300,
  "status": "passed"
});
formatter.match({
  "location": "ExampleSteps.click_on_populate()"
});
formatter.result({
  "duration": 119952200,
  "status": "passed"
});
formatter.match({
  "location": "ExampleSteps.reset_Information_Popup_is_displayed()"
});
formatter.result({
  "duration": 184650600,
  "status": "passed"
});
});