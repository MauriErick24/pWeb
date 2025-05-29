import sys
from rembg import remove
from PIL import Image

def main(input_path, output_path):
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Uso: python remove_bg.py input_path output_path")
        sys.exit(1)

    main(sys.argv[1], sys.argv[2])
