# date-formatter-package

A lightweight and flexible JavaScript utility to format dates using **ICU date-time format tokens** and standard **preset styles**. Ideal for any JavaScript/TypeScript project that requires locale-aware and timezone-aware date formatting.

---

## ✨ Features

- ✅ Supports all ICU date-time format tokens
- ✅ Includes common preset styles (`short`, `medium`, `long`, `full`)
- ✅ Locale-aware formatting
- ✅ Timezone support
- ✅ Handles `null`/`undefined` inputs gracefully
- ✅ Fully typed with TypeScript

---

## 📦 Installation

```bash
npm install date-formatter
```

or with yarn:

```bash
yarn add date-formatter
```

## Built-in Presets (DateFormat Enum)

You can use the DateFormat enum for common date and time format presets:

<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Key</th>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Pattern</th>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Example Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">short</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'M/d/yy, h:mm a'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">5/29/25, 2:15 PM</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">medium</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'MMM d, y, h:mm:ss a'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">May 29, 2025, 2:15:30 PM</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">long</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'MMMM d, y, h:mm:ss a z'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">May 29, 2025, 2:15:30 PM GMT+5</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">full</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'EEEE, MMMM d, y, h:mm:ss a zzzz'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Thursday, May 29, 2025, 2:15:30 PM Pakistan Standard Time</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">shortDate</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'M/d/yy'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">5/29/25</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">mediumDate</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'MMM d, y'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">May 29, 2025</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">longDate</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'MMMM d, y'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">May 29, 2025</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">fullDate</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'EEEE, MMMM d, y'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Thursday, May 29, 2025</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">shortTime</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'h:mm a'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">2:15 PM</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">mediumTime</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'h:mm:ss a'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">2:15:30 PM</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">longTime</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'h:mm:ss a z'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">2:15:30 PM GMT+5</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">fullTime</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'h:mm:ss a zzzz'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">2:15:30 PM Pakistan Standard Time</td>
    </tr>
  </tbody>
</table>

## Custom Formats

The formatter supports a subset of ICU/Angular-style date tokens:

<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Token</th>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Meaning</th>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">y</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Year (numeric)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">2025</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">yy</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Year (2-digit)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">25</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">M</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Month (numeric)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">5</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">MM</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Month (2-digit)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">05</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">MMM</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Month (short text)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">May</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">MMMM</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Month (full text)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">May</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">d</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Day (numeric)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">9</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">dd</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Day (2-digit)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">09</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">EEE</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Weekday (short)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Thu</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">EEEE</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Weekday (long)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Thursday</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">h/hh</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Hour (12-hour)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">2 / 02</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">H/HH</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Hour (24-hour)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">14 / 14</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">m/mm</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Minute</td>
      <td style="border: 1px solid #ccc; padding: 8px;">5 / 05</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">s/ss</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Second</td>
      <td style="border: 1px solid #ccc; padding: 8px;">9 / 09</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">a</td>
      <td style="border: 1px solid #ccc; padding: 8px;">AM/PM</td>
      <td style="border: 1px solid #ccc; padding: 8px;">PM</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">z</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Time zone (short)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">GMT+5</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">zzzz</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Time zone (long)</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Pakistan Standard Time</td>
    </tr>
  </tbody>
</table>

## Function: `dateFormatter`

The core utility function of this package is:

```ts
dateFormatter(
  input: Date | string | number,
  format?: keyof typeof DateFormat | string,
  locale?: string
): string

```

### Parameters
<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Parameter</th>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Type</th>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Default</th>
      <th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">input</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Date | string | number</td>
      <td style="border: 1px solid #ccc; padding: 8px;">Required</td>
      <td style="border: 1px solid #ccc; padding: 8px;">
        The input date to format. Can be a <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">Date</code> object, ISO string (<code>'2025-12-25T10:00:00'</code>), or a timestamp (<code>1735123200000</code>).
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">format</td>
      <td style="border: 1px solid #ccc; padding: 8px;">keyof DateFormat | string</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'medium'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">
        A custom ICU/Angular-style format string (e.g. <code>'dd/MM/yy'</code>) or a key from the built-in <code>DateFormat</code> enum (<code>'short'</code>, <code>'fullTime'</code>, etc.).
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;">locale</td>
      <td style="border: 1px solid #ccc; padding: 8px;">string</td>
      <td style="border: 1px solid #ccc; padding: 8px;">'en-US'</td>
      <td style="border: 1px solid #ccc; padding: 8px;">
        Locale code to control localization of month names, day names, AM/PM, etc. Examples: <code>'en-US'</code>, <code>'fr-FR'</code>, <code>'ur-PK'</code>.
      </td>
    </tr>
  </tbody>
</table>


## Usage & Examples

```bash
// Import
 import { dateFormatter } from 'date-formatter';

// Basic Example
const formatted = dateFormatter(new Date(), 'medium');
console.log(formatted); // e.g., "May 29, 2025, 2:15:30 PM"

// With Custom Format
const custom = dateFormatter(new Date(), 'dd/MM/yy');
console.log(custom); // e.g., "29/05/25"

// With Custom Locale
const french = dateFormatter(new Date(), 'fullDate', 'fr-FR');
console.log(french); // e.g., "jeudi 29 mai 2025"

// Example Scenarios

dateFormatter('2025-12-25T10:00:00', 'fullDate');
// Output: "Thursday, December 25, 2025";

dateFormatter(1735123200000, 'MMM d, y');
// Output: "Dec 25, 2025"

dateFormatter('invalid-date', 'medium');
// Output: "Invalid Date"

```

## Notes

<ul style="font-family: Arial, sans-serif; padding-left: 20px; line-height: 1.6;">
  <li style="margin-bottom: 8px;">
    Falls back to <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">date.toISOString()</code> if format parsing fails.
  </li>
  <li style="margin-bottom: 8px;">
    Supports only tokens explicitly mapped to <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">Intl.DateTimeFormatOptions</code>.
  </li>
  <li style="margin-bottom: 8px;">
    Ideal for lightweight date formatting without pulling in larger libraries like <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">date-fns</code> or <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">moment</code>.
  </li>
</ul>
