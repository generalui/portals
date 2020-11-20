# Data Dictionary Architecture

## Synapse Portal

The initial Data Dictionary with be deployed as a Synapse Portal. This will support a number of points:

- The Synapse Portal has a deployment process already supported by Sage

- The Synapse Portal is familiar to Sage. Not trying to introduce a new tech stack or framework.

- The Data Dictionary will be built to be implemented in Synapse Portals. Building it in it's own Synapse portal will help demonstrate this implementation.

## Common Component

The Data Dictionary will be built as a common component in the synapse Portal for re-use in other portals.

## Synapse Login

The Synapse login system in the Synapse portal may be used to log Synapse users in and facilitate leveraging Synapse to store user's schema json-ld files.

Synapse could also house the schema json-ld files to be built into the app. Thus, they could be updated readily within Synapse and not requiring an app update.
