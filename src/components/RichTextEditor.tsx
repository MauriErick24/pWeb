import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";
import React from "react";

import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Underline as UnderlineIcon,
  Heading1,
  ImageIcon,
  Link as LinkIcon,
} from "lucide-react";

type Props = {
  content: string;
  setContent: (value: string) => void;
};

export const RichTextEditor: React.FC<Props> = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link, Image, Heading],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  if (!editor) return null;

  const buttonClass = (isActive: boolean) =>
    `p-2 border rounded hover:bg-gray-100 ${
      isActive ? "bg-indigo-200" : ""
    }`;

  return (
    <div className="border border-gray-300 rounded-lg mb-4 bg-white p-2">
      <div className="flex flex-wrap gap-2 mb-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonClass(editor.isActive("bold"))}
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={buttonClass(editor.isActive("italic"))}
        >
          <Italic size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={buttonClass(editor.isActive("underline"))}
        >
          <UnderlineIcon size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={buttonClass(editor.isActive("bulletList"))}
        >
          <List size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={buttonClass(editor.isActive("orderedList"))}
        >
          <ListOrdered size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={buttonClass(editor.isActive("heading", { level: 1 }))}
        >
          <Heading1 size={18} />
        </button>
        <button
          onClick={() => {
            const url = prompt("URL del enlace:");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={buttonClass(editor.isActive("link"))}
        >
          <LinkIcon size={18} />
        </button>
        <button
          onClick={() => {
            const url = prompt("URL de la imagen:");
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          className={buttonClass(false)}
        >
          <ImageIcon size={18} />
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};
