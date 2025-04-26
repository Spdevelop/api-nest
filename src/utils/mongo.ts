import { isValidObjectId } from 'mongoose';
import { ErrorException } from '../core/exceptions/index';

export function validateMongoId(id: string) {
  if (!isValidObjectId(id)) {
    throw ErrorException.BAD_REQUEST_WITH({ message: 'Invalid ID format' });
  }
}
