# Temporal

## Installation

```
npm install
npm start
```

The workshop will use the console in the developer tools, so please open this to see the output.

Try to solve the problems by using the documentation: https://tc39.es/proposal-temporal/docs/

Here you are guided toward documentation related to specific data types.

Some of the solutions to the problems can be found in the Temporal Cookbook: https://tc39.es/proposal-temporal/docs/cookbook.html

When doing `console.log(...)`, it helps to use `toString()` on the Temporal data types for readability.

## Helper methods

### since / add / equals and Durations

We will use a PlainDateTime object for the following exercises, but most of the other data types have similar functionality. The docs should be sufficient to solve the exercises: https://tc39.es/proposal-temporal/docs/plaindatetime.html

In `index.js` create two `PlainDateTime` objects:

- `dateTimePast`: a date/time in the past, with a year, month, day, and hour;
- `dateTimeToday`: a date/time for today, rounded to the nearest hour.

Let's play around with some of the functionality. First we will create a `Duration`. This type stores a certain amount of time, and it can be used to perform calculations on date/time objects. For more information on `Duration`: https://tc39.es/proposal-temporal/docs/duration.html

- How much time has passed since `dateTimePast` until today? Store this `Duration`.
- Add the duration to `dateTimePast`. Check that the result indeed _equals_ `dateTimeToday`.
- Use the `total` method on the duration to see how many hours are between the two dates.

The `total` method is useful to get the time that has passed in a specific unit. Why do you think the following code gives an error? Fix the code, so that we get the amount of minutes that will have passed, four months and three days from now (the answer should be 180000).

```javascript
const duration2 = Temporal.Duration.from({ days: 3, months: 4 });
console.log(duration2.total('minutes'));
```

### Immutability

We have just performed rounding and addition on a `PlainDateTime` object. There are some other methods we can use to manipulate all the different data types. Just a couple of examples:

- add
- subtract
- with
- round

Add the following code:

```javascript
console.log(dateTimeToday.round('days').toString());
console.log(dateTimeToday.toString());
```

As you can see, the first statement didn't change the original `dateTimeToday` object. This is the case for all the standard methods on the Temporal data types. Immutability is part of the design, in which it also differs from the traditional `Data()` object.

### with

You can use the `with` method to very easily change any of the date/time values. This (as with most of the helper methods) works on most other data types as well. You can play around with this, but there is no separate exercise for this.

## Time zone aware date time

You are flying from New York to Amsterdam, and your flight departs at 18:00, on Saturday October 29th. The flight arrives the next day, at 5:30 in the morning.

- Create the appropriate `ZonedDateTime` objects and find out how long the flight took.
- Change both the dates to one day earlier, and see what happens with the resulting duration. Can you guess what happens somewhere in the night of 29 on 30 October?

## Sorting

Each Temporal type has a `compare()` static method that can be passed to `Array.prototype.sort()`. An example of when this can be useful, is when you want to sort strings representing date/times. In `index.js` we have a function that should be doing this, but currently it is not sorting at all. Implement a correct sorting function, so that you get the following result:

```javascript
[
    '2020-01-23T17:04:36.491865121-08:00',
    '2020-02-10T17:04:36.491865121-08:00',
    '2020-04-01T10:00:00+01:00[Europe/London]',
    '2020-04-01T05:01:00-04:00[America/New_York]',
    '2020-04-01T11:02:00+02:00[Europe/Berlin]';
]
```
