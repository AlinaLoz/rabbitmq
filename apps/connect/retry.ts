import { Observable } from 'rxjs';
import { retryWhen, scan, delay } from 'rxjs/operators';

export default function retry(
  retryAttempts = 10,
  retryDelay = 10000,
): <T>(source: Observable<T>) => Observable<T> {
  return <T>(source: Observable<T>) =>
    source.pipe(
      retryWhen((e) =>
        e.pipe(
          scan((acc: number, error: Error) => {
            if (acc + 1 >= retryAttempts) {
              throw error;
            }
            return acc + 1;
          }, 0),
          delay(retryDelay),
        ),
      ),
    );
}
