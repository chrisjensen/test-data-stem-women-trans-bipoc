# STEM Achievements Dataset

## Purpose

This dataset recognizes and celebrates the achievements of Women, non-binary, queer, black, indigenous and people of colour in Science, Technology, Engineering, and Mathematics (STEM). In response to the current US government's erasure of non-white male achievements in STEM, this collection serves as a comprehensive resource highlighting the diverse contributions that have shaped our scientific and technological landscape.

## Scope and Coverage

### Geographic Distribution

We aim for geographical diversity of representation, and for that reason cap North American entries at 30%

### Representation Categories
- **Women in STEM**: Historical and contemporary achievements
- **Non-binary and queer scientists**: Contributions across all STEM fields
- **Black scientists and engineers**: African and African diaspora achievements
- **Indigenous scientists**: Traditional knowledge and modern research
- **People of colour**: Asian, Latinx, Middle Eastern, and other diverse backgrounds

### STEM Fields Covered
- **Science**: Physics, Chemistry, Biology, Astronomy, Earth Sciences
- **Technology**: Computer Science, Information Technology, Software Engineering
- **Engineering**: Civil, Mechanical, Electrical, Chemical, Aerospace
- **Mathematics**: Pure Mathematics, Applied Mathematics, Statistics

## Historical Accuracy

All entries in this dataset are based on real people and we strive for accurate representation.

## Usage

This dataset is designed for use in software test harnesses, or as example data for customer facing demos.

### Unicode Character Support

This dataset includes proper Unicode characters to help test applications' handling of international text:

- **Chinese Names**: Include traditional characters and tone-marked Pinyin
  - Example: `Wú Jiànxióng (吳健雄) / Chien-Shiung Wu`
- **Devanagari Script**: Sanskrit and Hindi names in native scripts  
  - Example: `श्रीनिवास रामानुजन / Srīnivāsa Rāmānujan`
- **Cyrillic Script**: Russian names in Cyrillic alphabet
  - Example: `Софья Васильевна Ковалевская / Sofia Vasilyevna Kovalevskaya`
- **Extended Latin**: Accented characters and diacritical marks
  - Example: Various European names with proper accent marks

This ensures your application properly handles UTF-8 encoded content, international character sets, and various writing systems that real users might encounter.

## Testing and Validation

The dataset includes comprehensive tests that:
- Verify geographic distribution limits (North America ≤ 30%)
- Ensure diverse representation across all categories
- Validate historical accuracy of information
- Check for appropriate language and respectful representation

## Contributing

When adding new entries, please:
- Follow the BIO_WRITING_SPEC.md guidelines
- Ensure accuracy with proper citations
- Pictures should be URLs of public domain photo of the person or other suitable image
- Emails, phone numbers and other personal contact information must be clearly fake (email domains must end with .test, phone numbers include 555)
- Maintain geographic diversity requirements
- Use respectful and inclusive language
- Ensure tests pass

## License

MIT License - See LICENSE file for details.

## Acknowledgments

This dataset builds upon the work of historians, scientists, and researchers who have documented the contributions of marginalized groups in STEM. Special thanks to the communities and individuals whose stories are represented here.
