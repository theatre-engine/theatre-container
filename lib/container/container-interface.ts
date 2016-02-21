import DefinitionInterface from 'theatre/container/definition/definition-interface';
import DefinitionCollectionInterface from 'theatre/container/definition/definition-collection-interface';

/**
 * Contains the basic blueprint for a container.
 *
 * @author David Jegat <david.jegat@gmail.com>
 */
export default interface ContainerInterface
{
    /**
     * Register a new member definition inside the container.
     */
    register(name: string, definition: DefinitionInterface): ContainerInterface;

    /**
     * Retrieve an existing resolved member or throws an exception if no
     * members are present for the given name.
     */
    get(name: string): any;

    /**
     * Test if a given member exists inside the container.
     */
    has(name: string): boolean;

    /**
     * Retrieve definitions by tag name
     */
    find(tag: string): DefinitionCollectionInterface;
}
