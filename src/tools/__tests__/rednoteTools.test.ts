import { RedNoteTools, Note, Comment } from '../rednoteTools'

// npm run test
describe('RedNoteTools', () => {
  let redNoteTools = new RedNoteTools()

  afterAll(async () => {
    await redNoteTools.cleanup()
  })

  test('getNoteContent 应该返回笔记详情', async () => {
    const urlContent = '' // 需要替换为实际笔记URL

    const url = redNoteTools.extractRedBookUrl(urlContent)
    const note = await redNoteTools.getNoteContent(url)
    console.log(note)
    expect(note).toBeDefined()
    expect(note.url).toBe(url)
  }, 600000)
})
