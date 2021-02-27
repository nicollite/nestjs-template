import { HttpError } from "@http-error";
import * as Joi from "joi";

/**
 * Create a HttpError Object form the Joi ValidationError object
 * @param error The Joi ValidationError error object
 * @returns A HttpError instance
 */
export function getHttpErrorFromJoiValidationError(error: Joi.ValidationError) {
  const message = "Error: \n" + error.details.map(detail => detail.message).join("\n");
  return new HttpError(400, message, { info: { details: error.details } });
}
