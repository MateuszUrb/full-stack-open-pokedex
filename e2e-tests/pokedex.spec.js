const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('localhost:8080')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.',
      ),
    ).toBeVisible()
  })
  test.only('can navigate to specific pokemon', async ({ page }) => {
    await page.goto('localhost:8080')
    await expect(page.getByText('ivysaur')).toBeVisible()

    await page.goto('localhost:8080/pokemon/bulbasaur')

    await expect(page.getByText('bulbasaur')).toBeVisible()
    await expect(page.getByText('Speed')).toBeVisible()
  })
})
