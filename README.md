# Things Service

This respository contains the code for the Things Service

## Setup
1. Clone this repository to your local machine using
    - git clone

## Installation
When you download a copy of the repository it does not include the dependencies. The `package.json` file contains the project dependencies which can be downloaded using the following command:

```DOS
> cd <project root>
> npm install
```

## Execution
To run the service use the following command:

```DOS
> npm prod
```

Or, for development mode use:

```DOS
> npm dev
```
**NOTE:** you may need to use `npm run <env>`, if the previous commands do not work.

## Testing
To run the Cucumber tests you must make sure you have the service running prior to running the following command:

```DOS
> npm test
```

## Database
If a database was in use, rather than would be a few changes within the code. The unique ID given to the Thing would not be passed through in the POST message, but assigned by the database.

The data would be stored in a thing table, with the columns id, dateCreated, name and message. The ID would be set as the primary key.