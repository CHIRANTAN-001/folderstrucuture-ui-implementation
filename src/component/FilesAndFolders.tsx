import { Fragment, useState } from "react";
import { FaFolderClosed } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

type Node = {
    name: string;
    nodes?: Node[];
};

const FilesAndFolders = ({ node }: { node: Node }) => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <li className='py-1 flex-row' key={node?.name}>
            <span className='flex items-center gap-1.5'>
                {(node?.nodes && node?.nodes.length > 0) ? (
                    <Fragment>
                        <button className='flex flex-row items-center justify-center gap-2' onClick={() => setIsOpen(!isOpen)}>
                            <SlArrowRight className={`text-gray-200 size-2 ${isOpen ? 'rotate-90' : ''}`} />
                            <FaFolderClosed className='text-green-400 size-4' />
                            <span className='text-gray-400'>{node?.name}</span>
                        </button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <FaReact className='text-blue-700 size-4 ml-4' />
                        <span className='text-gray-400'>{node?.name}</span>
                    </Fragment>
                )}
            </span>
            {isOpen && (
                <ul className='pl-5'>
                    {node?.nodes?.map((node) => (
                        <FilesAndFolders node={node} key={node?.name} />
                    ))}
                </ul>
            )}
        </li>

    )
}

export default FilesAndFolders;