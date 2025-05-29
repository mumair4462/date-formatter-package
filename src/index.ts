import { DateFormat } from "./types";


export function dateFormatter(
    input: Date | string | number,
    format: keyof typeof DateFormat | string = 'medium',
    locale: string = 'en-US'
): string {
    let date: Date;

    // Parse input to Date
    if (input instanceof Date) {
        date = input;
    } else if (typeof input === 'string' || typeof input === 'number') {
        const parsed = new Date(input);
        if (isNaN(parsed.getTime())) {
            return 'Invalid Date';
        }
        date = parsed;
    } else {
        return 'Invalid Input';
    }

    // Use preset if available
    const formatString =
        DateFormat[format as keyof typeof DateFormat] || format;

    try {
        return new Intl.DateTimeFormat(locale, buildIntlOptions(formatString)).format(date);
    } catch (err) {
        return date.toISOString(); // fallback
    }
}

// Utility: Convert Angular-like format to Intl options
function buildIntlOptions(format: string): Intl.DateTimeFormatOptions {
  const options: Intl.DateTimeFormatOptions = {};

  if (format.indexOf('y') !== -1) options.year = 'numeric';
  if (format.indexOf('yy') !== -1 && format.indexOf('yyy') === -1) options.year = '2-digit';

  if (format.indexOf('MMMM') !== -1) options.month = 'long';
  else if (format.indexOf('MMM') !== -1) options.month = 'short';
  else if (format.indexOf('MM') !== -1) options.month = '2-digit';
  else if (format.indexOf('M') !== -1) options.month = 'numeric';

  if (format.indexOf('dd') !== -1) options.day = '2-digit';
  else if (format.indexOf('d') !== -1) options.day = 'numeric';

  if (format.indexOf('EEEE') !== -1) options.weekday = 'long';
  else if (format.indexOf('EEE') !== -1) options.weekday = 'short';

  if (format.indexOf('hh') !== -1 || format.indexOf('h') !== -1) {
    options.hour = '2-digit';
    options.hour12 = true;
  } else if (format.indexOf('HH') !== -1 || format.indexOf('H') !== -1) {
    options.hour = '2-digit';
    options.hour12 = false;
  }

  if (format.indexOf('mm') !== -1) options.minute = '2-digit';
  if (format.indexOf('ss') !== -1) options.second = '2-digit';

  if (format.indexOf('zzzz') !== -1) options.timeZoneName = 'long';
  else if (format.indexOf('z') !== -1) options.timeZoneName = 'short';

  return options;
}

