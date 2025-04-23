import { Logger, LoggerService } from '@nestjs/common';

export class SpdevLogger implements LoggerService {
  private static get callerName() {
    return (
      new Error().stack?.split('\n')[3]?.slice(7).match('([\\w.])+')?.[0] || ''
    );
  }

  log(message: unknown, context?: string) {
    Logger.log(
      message,
      [SpdevLogger.callerName, context].filter(Boolean).join(':'),
    );
  }

  error(message: unknown, context?: string) {
    Logger.log(
      message,
      [SpdevLogger.callerName, context].filter(Boolean).join(':'),
    );
  }

  warn(message: unknown, context?: string) {
    Logger.log(
      message,
      [SpdevLogger.callerName, context].filter(Boolean).join(':'),
    );
  }

  debug?(message: unknown, context?: string) {
    Logger.log(
      message,
      [SpdevLogger.callerName, context].filter(Boolean).join(':'),
    );
  }

  verbose?(message: unknown, context?: string) {
    Logger.log(
      message,
      [SpdevLogger.callerName, context].filter(Boolean).join(':'),
    );
  }
}
