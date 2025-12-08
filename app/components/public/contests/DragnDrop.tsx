import { useState } from "react";
import { FileUploader } from "react-drag-drop-files"
import Svg from "../../reusables/Svg"
import { icons } from "~/assets/icons"

const FILE_TYPES = ["JPG", "PNG"]

export default function DragnDrop({
    className = '', labelText = 'Upload Images', name = 'images',
    multiple = false, required = false, fileTypes = FILE_TYPES
}: {
    className?: string, labelText?: string, name?: string,
    multiple?: boolean, required?: boolean, fileTypes?: string[]
}) {
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (file: File | File[]) => {
        const selectedFile: File = (file instanceof FileList || Array.isArray(file)) ? file[0] : file;

        if (selectedFile && selectedFile.type.startsWith("image/")) {
            setPreview(URL.createObjectURL(selectedFile));
        } else {
            setPreview(null);
        }
    };

    return (
        <div className={`w-full max-w-full overflow-hidden ${className}`}>
            <span className="font-bold">{labelText}</span>
            <FileUploader
                name={name}
                types={fileTypes}
                multiple={multiple}
                required={required}
                handleChange={handleChange}
            >
                <div className="flex flex-col gap-4 items-center p-6 border-2 hover:border-primary border-dashed rounded-lg">
                    <div className="border-2 border-black p-4 rounded-full w-fit">
                        <Svg src={icons.imageIcon} />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-center">
                            <span className="underline underline-offset-4 font-bold cursor-pointer">Click here to upload</span> <span>or drag and drop</span>
                        </p>
                        <span className="font-bold text-gray-400">JPG, PNG (max. 5mb)</span>
                        {/* <span className="font-semibold text-sm text-red-400">Error</span> */}
                    </div>
                </div>
            </FileUploader>
            {preview && (
                <div className="mt-4 flex flex-col items-center">
                    <span className="text-xs text-gray-500 mb-1">Image Preview:</span>
                    <img src={preview} alt="Preview" className="max-h-40 rounded shadow" />
                </div>
            )}
        </div>
    )
}