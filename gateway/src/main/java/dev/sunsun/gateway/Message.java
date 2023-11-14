/**
 * This package contains classes related to the gateway functionality of the application.
 */
package dev.sunsun.gateway;

/**
 * A record representing a message with a role and content.
 *
 * @param role the role of the message
 * @param content the content of the message
 */
public record Message(String role, String content) {}