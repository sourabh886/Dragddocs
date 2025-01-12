import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        className="relative w-60 h-72 rounded-[40px] bg-sky-400 text-white px-8 py-10 text-sm overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="py-3">{data.desc}</p>

        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between px-8 py-3 mb-3 bg-zinc-500">
            <h5>{data.filesize}</h5>
            <span className="w-5 h-4 bg-green-500 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdClose />
              ) : (
                <MdOutlineFileDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen ? (
            <div
              className={`tag w-full py-4 items-center flex justify-center bg-${data.tag.tagColor}-600`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
