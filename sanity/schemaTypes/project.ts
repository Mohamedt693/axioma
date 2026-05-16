// sanity/schemaTypes/project.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Architectural Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'modelFile',
      title: '3D Model (.glb)',
      type: 'file',
      options: { accept: '.glb' },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})