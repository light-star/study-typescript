import inquirer from 'inquirer';
import chalk from 'chalk';
import shelljs from 'shelljs';
import { promises as fsPromise } from 'fs';
import path from 'path';

const init = async () => {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'workspace',
      message: 'please select workspace',
      choices: [
        { name: 'zhaojiaqi', value: 'zhaojiaqi' },
        { name: 'heqian', value: 'heqian' },
      ],
    },
    {
      type: 'list',
      name: 'level',
      message: 'please select level',
      choices: [
        { name: 'easy', value: 'easy' },
        { name: 'medium', value: 'medium' },
        { name: 'hard', value: 'hard' },
        { name: 'extreme', value: 'extreme' },
      ],
    },
    {
      type: 'input',
      name: 'dirName',
      message: 'input make directory name',
      validate: input => {
        if (input.trim() === '') {
          console.log(chalk.red.bold("\n\t directory name can't empty! please try again."));
        } else {
          return true;
        }
      },
    },
  ]);
  return answer;
};

const checkDir = async (pathDir, answer) => {
  try {
    await fsPromise.access(pathDir);
    console.log(chalk.red.bold(`[${answer.dirName}] 该文件已存在`));
    const result = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'isDelete',
        message: 'delete exist directory?',
        default: false,
      },
    ]);
    if (result.isDelete) {
      shelljs.rm('-rf', pathDir);
      console.log(chalk.red.bold('删除成功'));
    } else {
      process.exit(1);
    }
  } catch (e) {
    // ignore
  }
};

const createDir = async pathDir => {
  try {
    // 递归创建，因为git不会上传空文件夹
    await fsPromise.mkdir(pathDir, { recursive: true });
  } catch (e) {
    console.log(chalk.red.bold('文件夹创建失败'));
    process.exit(1);
  }
};

const createFile = async (pathDir, fileList) => {
  const makeFile = fileName =>
    fsPromise.writeFile(
      path.resolve(pathDir, fileName),
      /\.ts$/.test(fileName) ? 'export {};\n\n' : ''
    );

  try {
    Promise.all(fileList.map(makeFile));
  } catch (e) {
    console.log(chalk.red.bold('文件夹创建失败'));
    process.exit(1);
  }
};

const main = async () => {
  console.log(chalk.blue.bold('start generate directory ~'));
  const answer = await init();
  const fileList = ['question.ts', 'answer.ts', 'description.md'];
  const pathDir = path.resolve(process.env.PWD, answer.workspace, answer.level, answer.dirName);
  await checkDir(pathDir, answer);
  await createDir(pathDir);
  await createFile(pathDir, fileList);
  console.log(chalk.blue.bold('success ~'));
};

main();
