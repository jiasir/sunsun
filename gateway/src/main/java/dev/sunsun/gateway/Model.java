/**
 * Represents a model with a name and a list of messages.
 * This class is used in the gateway package.
 */
package dev.sunsun.gateway;
import java.util.List;

/**
 * A record representing a model with its associated messages.
 *
 * @param model the name of the model
 * @param messages the list of messages associated with the model
 */
public record Model(String model, List<Message> messages) {}



