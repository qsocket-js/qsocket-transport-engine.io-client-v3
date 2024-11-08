import type { Socket, SocketOptions, Message, MessageOptions, Transport, UpgradeError } from 'engine.io-client-v3';
import engine from 'engine.io-client-v3';

/**
 * Default export `engine` is the main module from `engine.io-client-v3`, providing the full functionality of
 * the Engine.IO client for version 3.5.4. It includes all core methods and properties required to establish
 * and manage a real-time communication client socket for interacting with an Engine.IO server.
 *
 * @type {typeof engine}
 */
export default engine;

/**
 * `QSocketTransportEIOClientV3Socket` represents the `Socket` class from `engine.io-client-v3`.
 * It is used to create and manage an individual client socket connection to an Engine.IO server,
 * allowing for real-time, low-latency communication.
 *
 * @type {Socket}
 */
export const QSocketTransportEIOClientV3Socket: typeof Socket = engine.Socket;

/**
 * `IQSocketTransportEIOClientV3Socket` is a type alias for the `Socket` class from `engine.io-client-v3`.
 * This type represents an individual client connection to the Engine.IO server.
 */
export type IQSocketTransportEIOClientV3Socket = Socket;

/**
 * `IQSocketTransportEIOClientV3SocketOptions` is a type alias for `SocketOptions` from `engine.io-client-v3`.
 * This type represents the configuration options available for initializing the Engine.IO client socket instance.
 */
export type IQSocketTransportEIOClientV3SocketOptions = SocketOptions;

/**
 * `IQSocketTransportEIOClientV3Message` is a type alias for `Message` from `engine.io-client-v3`.
 * This type represents a message sent between the Engine.IO client and server.
 */
export type IQSocketTransportEIOClientV3Message = Message;

/**
 * `IQSocketTransportEIOClientV3MessageOptions` is a type alias for `MessageOptions` from `engine.io-client-v3`.
 * This type specifies the options available when sending a message through the Engine.IO client socket.
 */
export type IQSocketTransportEIOClientV3MessageOptions = MessageOptions;

/**
 * `IQSocketTransportEIOClientV3Transport` is a type alias for the `Transport` class from `engine.io-client-v3`.
 * This type represents the various transport mechanisms (e.g., polling, WebSocket) that can be used
 * by the Engine.IO client to communicate with the server.
 */
export type IQSocketTransportEIOClientV3Transport = Transport;

/**
 * `IQSocketTransportEIOClientV3UpgradeError` is a type alias for `UpgradeError` from `engine.io-client-v3`.
 * This type represents the errors that can occur when the Engine.IO client attempts to upgrade the
 * connection to a different transport mechanism (e.g., from polling to WebSocket).
 */
export type IQSocketTransportEIOClientV3UpgradeError = UpgradeError;
