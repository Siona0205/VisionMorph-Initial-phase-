import sys
from diffusers import StableDiffusionPipeline
import torch

prompt = sys.argv[1]

# Automatically use GPU if available, otherwise CPU
device = "cuda" if torch.cuda.is_available() else "cpu"

pipe = StableDiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4"
).to(device)

image = pipe(prompt).images[0]
image_path = "public/generated_image.png"
image.save(image_path)

print("http://localhost:5000/generated_image.png")
